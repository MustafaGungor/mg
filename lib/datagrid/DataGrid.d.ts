import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../css/mg-ui.css';
export interface DataGridProps {
    /**
     * Set the array data
     */
    store?: any;
    /**
     * Set the data array models
     */
    fields?: Array<any>;
    /**
     * Set the selected data returned func
     */
    onSelected?: any;
    /**
     * multi select
     */
    onDoubleSelected?: any;
    /**
     * multi selected option
     */
    multiSelect?: boolean;
    /**
    * pagination control
    */
    pagination?: boolean;
    /**
     * show page data
     */
    pageShow?: number | any;
    /**
     * page show count
     */
    pageShowCount?: number | any;
    /**
     * header toolbars
     */
    toolbars?: any;
    /**
     * header title
     */
    title?: any;
    /**
     * column option menu showing
     */
    fieldShowing?: any;
    /**
     * row menu select
     */
    select?: boolean | any;
    /**
     * context menu
     */
    rowContextData?: any;
}
export interface DataGridState {
    store?: any;
    fields?: Array<any> | any;
}
export default class DataGrid extends React.Component<DataGridProps, DataGridState> {
    static defaultPorps: Partial<DataGridProps>;
    tbodyRef: any;
    constructor(props: DataGridProps);
    UNSAFE_componentWillReceiveProps(props: DataGridProps): void;
    _init(props: DataGridProps): void;
    render(): JSX.Element;
    componentDidMount(): void;
    resetData(): void;
    resetSelected(): void;
    storeRun(): void;
    fieldOptionReset(fields: any): void;
}
