import { PropsWithChildren } from "react";
import { TableContainerSettings } from "./TableContainerSettings";
import { useNode } from "@craftjs/core";
import { TableContainerConfig } from "./TableContainerConfig";
import { get } from "lodash-es";
import { ElementGroupType } from "../../fields/Field";

interface ITableContainerPorps {}

export const TableContainer = (
  props: PropsWithChildren<ITableContainerPorps>
) => {
  const { children } = props;
  const {
    connectors: { connect, drag },
  } = useNode();
  // grid   grid-cols-2 gap-4 auto-rows-min

  return (
    <div
      ref={(ref) => connect(drag(ref!))}
      className="w-full  pt-0   	 my-5 ant-table-wrapper   shadow-lg"
    >
      <div className="ant-table ant-table-empty">
        <div className="ant-table-container">
          <div className="ant-table-content overflow-x-auto ">
            <table className="  table-auto">
              <thead className="ant-table-thead ">
                <tr className="flex w-fit pr-16">
                  <th className="ant-table-cell w-[100px]  min-w-[100px]">
                    序号
                  </th>

                  {children}
                </tr>
              </thead>
              <tbody className="ant-table-tbody">
                <tr className="ant-table-placeholder">
                  <td className="ant-table-cell">
                    <div className="ant-empty ant-empty-normal">表格内容</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

TableContainer.craft = {
  ...TableContainerConfig,
  custom: {
    group: TableContainerConfig.group,
    designerBtnElement: TableContainerConfig.designerBtnElement,
  },
  rules: {
    canDrag: () => false,
    // canMoveOut: () => false,
    canMoveIn: (incomingNode: any) => {
      const group: ElementGroupType = get(
        incomingNode,
        "[0].data.custom.group",
        ""
      );

      return group === "tableColumn";
    },
  },
  related: {
    settings: TableContainerSettings,
  },
};
