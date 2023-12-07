import { ROOT_NODE, useEditor, useNode } from "@craftjs/core";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { IndicatorDiv, RenderNodeBtn } from "./styles";
import ReactDOM from "react-dom";
import { IoMdMove, IoMdTrash } from "react-icons/io";

export const RenderNode = ({ render }: { render?: any }) => {
  const { id } = useNode();
  const { actions, query, isActive } = useEditor((_, query) => ({
    isActive: query.getEvent("selected").contains(id),
  }));

  const {
    isHover,
    dom,
    name,
    moveable,
    deletable,
    connectors: { drag },
    parent,
  } = useNode((node) => ({
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));

  const currentRef = useRef<HTMLDivElement>(null);

  const noShowSelect = useMemo(() => {
    return name == "StartContainer";
  }, [name]);

  useEffect(() => {
    if (dom && !noShowSelect) {
      if (isActive || isHover) dom.classList.add("component-selected");
      else dom.classList.remove("component-selected");
    }
  }, [dom, isActive, isHover, name]);

  const getPos = useCallback((dom?: HTMLElement | null) => {
    if (!dom) {
      return {
        top: "0px",
        left: "0px",
        bottom: "0px",
      };
    }
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    console.log(top, "top");
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  const scroll = useCallback(() => {
    const { current: currentDOM } = currentRef;

    if (!currentDOM) return;
    const { top, left } = getPos(dom!);
    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom, getPos]);

  useEffect(() => {
    document
      .querySelector(".craftjs-renderer")!
      .addEventListener("scroll", scroll);

    return () => {
      document
        .querySelector(".craftjs-renderer")!
        .removeEventListener("scroll", scroll);
    };
  }, [scroll]);
  const showPortalFlag = !noShowSelect && (isHover || isActive);

  return (
    <>
      {showPortalFlag
        ? ReactDOM.createPortal(
            <IndicatorDiv
              ref={currentRef}
              className=" text-white  fixed flex pb-1 items-end"
              style={{
                left: getPos(dom).left,
                top: getPos(dom).top,
                zIndex: 9999,
              }}
            >
              <RenderNodeBtn className="flex-1  bg-primary  text-primary-foreground mr-1 ">
                {name}
              </RenderNodeBtn>
              {moveable ? (
                <RenderNodeBtn
                  className="cursor-move  bg-primary  text-primary-foreground mr-1"
                  ref={drag as any}
                >
                  <IoMdMove />
                </RenderNodeBtn>
              ) : null}

              {/* {id !== ROOT_NODE && (
                <RenderNodeBtn
                  className="mr-2 cursor-pointer"
                  onClick={() => {
                    actions.selectNode(parent || "");
                  }}
                >
                  <IoMdArrowUp />
                </RenderNodeBtn>
              )} */}
              {deletable ? (
                <RenderNodeBtn
                  className="cursor-pointer   bg-primary  text-primary-foreground mr-1"
                  onMouseDown={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    actions.delete(id);
                  }}
                >
                  <IoMdTrash />
                </RenderNodeBtn>
              ) : null}
            </IndicatorDiv>,
            document.querySelector(".page-container")!
          )
        : null}

      {render}
    </>
  );
};
