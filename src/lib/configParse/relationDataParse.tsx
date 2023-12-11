import lz from "lzutf8";
import { get } from "lodash-es";
import { parseHeaderArr2Obj } from "./base";

export const relationDataContentParse = (content?: string, userObj = {}) => {
  if (!content) {
    return {};
  }
  const jsonStr = lz.decompress(lz.decodeBase64(content));
  const config = JSON.parse(jsonStr);
  const searchContainerId = get(config, "ROOT.nodes[0]", "");
  const tableContainerId = get(config, "ROOT.nodes[1]", "");
  const tableContainerConfig = get(config, `${tableContainerId}.props`, {});
  if (!tableContainerId || !searchContainerId) {
    throw new Error("未找到表格配置!");
  }
  const tableContainerNodes = get(config, `${tableContainerId}.nodes`, []);
  const searchContainerIdNodes = get(config, `${searchContainerId}.nodes`, []);

  const searchColumns = searchContainerIdNodes
    .map((k) => {
      const item = get(config, k);
      if (!item || !item.props) {
        return null;
      }
      const { displayName } = item;
      const {
        enableMinMax,
        min,
        max,
        enableDecimal,
        precision,
        enableMoneyMode,
      } = item.props;
      const numberFieldProps =
        displayName == "NumberField"
          ? {
              ...item.props,

              min: enableMinMax ? min : undefined,
              max: enableMinMax ? max : undefined,
              precision: enableDecimal ? precision : undefined,
            }
          : {};

      const valueType =
        displayName == "NumberField" && enableMoneyMode
          ? "money"
          : displayName == "NumberField"
          ? "digit"
          : undefined;

      return {
        originItem: {
          ...item,
        },
        key: k,
        hideInTable: true,
        ...item.props,
        valueType,
        dataIndex: item.props.name,
        title: item.props.label,
        search: {
          transform: (value) => {
            return {
              [item.props.name]: value,
            };
          },
        },
        formItemProps: {
          label: "",
        },
        fieldProps: {
          placeholder: "请输入" + item.props.label,
          ...numberFieldProps,
        },
      };
    })
    .filter(Boolean);

  const columns = tableContainerNodes
    .map((k) => {
      const item = get(config, k);
      if (!item || !item.props) {
        return null;
      }
      const columnConfig = {
        originItem: {
          ...item,
        },
        key: k,
        ...item.props,
        formItemProps: {
          label: "",
          placeholder: "请输入" + item.props.label,
        },
        search: item.props.search
          ? {
              transform: (value) => {
                return {
                  [item.props.dataIndex]: value,
                };
              },
            }
          : false,
        initialValues: item.props.search ? item.props.initialValues : undefined,

        // search: false,
      };

      if (item.props.valueEnumArray && item.props.valueEnumArray.length) {
        const valueEnum = item.props.valueEnumArray.reduce((memo, cur) => {
          if (cur && cur.key && cur.value) {
            memo[cur.key] = {
              text: cur.value,
            };
          }

          return memo;
        }, {});

        columnConfig.valueEnum = valueEnum;
      }

      return columnConfig;
    })
    .filter(Boolean);

  const apiConfig = {
    labelPath: tableContainerConfig.nameFieldKey || "name",

    requestInfo: {
      method: tableContainerConfig.apiMethod || "post",
      url: tableContainerConfig.apiUrl,
      dataPath: tableContainerConfig.dataPath || "rows",
      totalPath: tableContainerConfig.totalPath || "total",
      headers: parseHeaderArr2Obj(
        tableContainerConfig.apiHeader,
        {
          ...userObj,
        },
        {}
      ),
    },

    initSearch: parseHeaderArr2Obj(
      tableContainerConfig.queryParams,
      {
        ...userObj,
      },
      {}
    ),
  };
  const tableProps = {
    rowKey: tableContainerConfig.idFieldKey || "id",
  };
  return {
    tableProps,
    apiConfig,
    searchColumns,
    columns,
  };
};
