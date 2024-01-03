import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Select,
  Divider,
  Popconfirm, Table, Typography
} from 'antd';

{/*GENERAR ID ALEATORIA*/}
const generateRandomId = () => {
    return Math.floor(Math.random() * 1000) + 1;
  };



{/* Para editar lo que va ingreasando al form*/}
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};


const FormDisabledDemo = () => {
    const [form] = Form.useForm();

    const [editingKey, setEditingKey] = useState('');
    const isEditing = (record) => record.key === editingKey;
    const edit = (record) => {
      form.setFieldsValue({
        name: '',
        age: '',
        address: '',
        ...record,
      });
      setEditingKey(record.key);
    };
    const cancelar = () => {
      setEditingKey('');
    };
    const save = async (key) => {
      try {
        const row = await form.validateFields();
        const newData = [...data];
        const index = newData.findIndex((item) => key === item.key);
        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, {
            ...item,
            ...row,
          });
          setData(newData);
          setEditingKey('');
        } else {
          newData.push(row);
          setData(newData);
          setEditingKey('');
        }
      } catch (errInfo) {
        console.log('Validate Failed:', errInfo);
      }
    };
   
 const [data, setData] = useState('');
 const [count, setCount] = useState(2);
 const [selectedStatus, setSelectedStatus] = useState(''); // Por defecto, disponible
 const [Activo, setActivo] = useState(false);
 const [Personas, setPersonas]=useState('');




  const [newItem, setNewItem] = useState('');
  const handleSelectChange = (value) => {
    // Mapeo de opciones seleccionadas a valores almacenados
    const statusMapping = {
      'Disponible': 'D',
      'Reservado': 'R',
      'En uso': 'U',
      'Atendida': 'A',
    };
    setSelectedStatus(statusMapping[value]);
};
  const handleInputChange = (e) => {
    setNewItem(e.target.value);

    if (inputValue.length <= 20) {
        setNewItem(inputValue);
      }
  };
  const handleCheckboxChange = (e) => {
    setActivo(e.target.checked);
  };
  const MaxPersonasN = (value) => {
    setPersonas(value);
  };

  const handleAddItem = () => {
    const newItemObject = {
      key: count,
      name: generateRandomId(),
      IDMesa: generateRandomId(),
      observacion: newItem,
      Estado: selectedStatus,
      Activo,
      MaxPersonas: Personas,
    };

    setData([...data, newItemObject]);
    setCount(count+1);
    setSelectedStatus('')
    setNewItem('');
    setPersonas('');

  };

 

    const columns = [
      {
        title: 'ID administrador',
        dataIndex: 'name',
        width: '15%',
        editable: false,
      },
      {
        title: 'ID Mesa',
        dataIndex: 'IDMesa',
        width: '15%',
        editable: false,
      },
      {
        title: 'observacion',
        dataIndex: 'observacion',
        width: '20%',
        editable: true,
      },
      {
        title: 'Estado',
        dataIndex: 'Estado',
        width: '15%',
        editable: false,
      },
      {
        title: 'Activo',
        dataIndex: 'Activo',
        width: '5%',
        editable: false,
        render: (Activo) => Activo ? 'Si' : 'No',
      },
      {
        title: 'MaxPersonas',
        dataIndex: 'MaxPersonas',
        width: '5%',
        editable: true,
      },
      {
        title: 'Acciones',
        dataIndex: 'Acciones',
        render: (_, record) => {
          const editable = isEditing(record);
          return editable ? (
            <span>
              <Typography.Link
                onClick={() => save(record.key)}
                style={{
                  marginRight: 8,
                }}
              >
                Save
              </Typography.Link>
              <Popconfirm title="Seguro de cancelar?" onConfirm={cancelar}>
                <a>Cancelar</a>
              </Popconfirm>
            </span>
          ) : (
            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
              Editar
            </Typography.Link>
          );
        },
      },
    ];
    const mergedColumns = columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record) => ({
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        }),
      };
    });
  
  
    return (
    <>
   
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        
        <Divider orientation="left"><h1>Crear Mesa</h1></Divider>
        


        <Form.Item label="Observación">
          <Input value={newItem} onChange={handleInputChange} maxLength={20}/>
        </Form.Item>
        <Form.Item label="Estado">
          <Select value={selectedStatus} onChange={handleSelectChange}>
            <Select.Option value="Disponible">Disponible</Select.Option>
            <Select.Option value="Reservado">Reservado</Select.Option>
            <Select.Option value="En uso">En uso</Select.Option>
            <Select.Option value="Atendida">Atendida</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Activo" name="disabled" valuePropName="checked">
          <Checkbox checked={Activo} onChange={handleCheckboxChange}></Checkbox>
        </Form.Item>
        <Form.Item label="Max. Personas">
          <InputNumber value={Personas} onChange={MaxPersonasN}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleAddItem}>Guardar</Button>
        </Form.Item>
      </Form>

{/*Form donde se añaden las mesas*/}
<Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancelar,
        }}
      />
    </Form>

    </>
  );
};
export default FormDisabledDemo;