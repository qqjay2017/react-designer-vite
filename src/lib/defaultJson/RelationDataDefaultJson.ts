export const RelationDataDefaultJson = {
  ROOT: {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      id: "Container",
      className: "flex flex-row gap-4",
    },
    displayName: "Container",
    custom: {},
    hidden: false,
    nodes: ["TreeContainer", "Container2"],
    linkedNodes: {},
  },
  Container2: {
    type: {
      resolvedName: "Container",
    },
    isCanvas: false,
    props: {
      id: "Container2",
    },
    displayName: "Container",
    custom: {},
    hidden: false,
    nodes: ["ProFormContainer", "TableContainer"],
    linkedNodes: {},
  },
  ProFormContainer: {
    type: {
      resolvedName: "ProFormContainer",
    },
    isCanvas: true,
    props: {
      grid: true,
      id: "ProFormContainer",
    },
    displayName: "ProFormContainer",
    custom: {
      group: "container",
      designerBtnElement: {
        label: "表单容器",
        description: "表单容器，用于创建一个实体或收集信息。",
      },
    },
    parent: "ROOT",
    hidden: false,
    nodes: ["kHKDth95iB"],
    linkedNodes: {},
  },
  kHKDth95iB: {
    type: {
      resolvedName: "TextField",
    },
    isCanvas: false,
    props: {
      colSpan: 12,
      label: "单行文字",
    },
    displayName: "TextField",
    custom: {
      group: "formField",
      designerBtnElement: {
        label: "文本框",
        description:
          "单行文本输入框，需要填写者在输入框内根据标题填写相应的内容。",
      },
    },
    parent: "ProFormContainer",
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  TableContainer: {
    type: {
      resolvedName: "TableContainer",
    },
    isCanvas: true,
    props: {
      apiMethod: "post",
      nameFieldKey: "name",
      idFieldKey: "id",
      queryParams: [],
      apiHeader: [],
      dataPath: "rows",
      totalPath: "total",
      id: "TableContainer",
    },
    displayName: "TableContainer",
    custom: {
      group: "container",
      designerBtnElement: {
        label: "表格容器",
        description: "表格容器，用于创建一个表格。",
      },
    },
    parent: "ROOT",
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  TreeContainer: {
    type: {
      resolvedName: "TreeContainer",
    },
    isCanvas: true,
    props: {
      apiMethod: "post",
      nameFieldKey: "name",
      idFieldKey: "id",
      queryParams: [],
      apiHeader: [],
      dataPath: "rows",
      totalPath: "total",
      id: "TreeContainer",
    },
    displayName: "TreeContainer",
    custom: {
      group: "container",
      designerBtnElement: {
        label: "树选择容器",
        description: "树选择容器，用于配置弹窗左侧树",
      },
    },
    parent: "ROOT",
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
};
