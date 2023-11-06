import React from 'react';

import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  Lookup,
  Form,
  Scrolling,
  ColumnChooser,
  Grouping,
  GroupPanel
} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';
import { Item } from 'devextreme-react/form';
import { employees, states } from './data.js';

const notesEditorOptions = { height: 100 };

class App extends React.Component {
  render() {
    return (
      <div id="data-grid-demo">
        <DataGrid
          dataSource={employees}
          keyExpr="ID"
          showBorders={true}
          width="97%"
          columnHidingEnabled
          allowColumnReordering
        >
          <Paging enabled={false} />
          <Scrolling mode="standard" />
          <Editing
            mode="popup"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true}>
               <Grouping contextMenuEnabled={true} expandMode="rowClick" />
          <GroupPanel visible={true} emptyPanelText="Use the context menu of header columns to group data" />
            <Popup title="Employee Info" showTitle={true} 
            
            minWidth="35%" minHeight="45%"
            resizeEnabled
            />
             <ColumnChooser enabled={true} mode="select" />
            <Form>
              <Item itemType="group" colCount={2} colSpan={2}>
                <Item dataField="FirstName"  />
                <Item dataField="LastName" />
                <Item dataField="Prefix" />
                <Item dataField="BirthDate" />
                <Item dataField="Position" />
                <Item dataField="HireDate" />
                <Item
                  dataField="Notes"
                  editorType="dxTextArea"
                  colSpan={2}
                  editorOptions={notesEditorOptions} />
              </Item>

              {/* <Item itemType="group" caption="Home Address" colCount={2} colSpan={2}>
                <Item dataField="StateID" />
                <Item dataField="Address" />
              </Item> */}
            </Form>
          </Editing>
          <Column dataField="Prefix" caption="Title" width={70} allowGrouping={false}/>
          <Column dataField="FirstName"  />
          <Column dataField="LastName" />
          <Column dataField="BirthDate" dataType="date" />
          <Column dataField="Position" width={170} />
          <Column dataField="HireDate" dataType="date" />
          <Column dataField="StateID" caption="State" width={125}>
            <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
          </Column>
          <Column dataField="Address" visible={false} />
          <Column dataField="Notes" visible />
        </DataGrid>
      </div>
    );
  }
}

export default App;
