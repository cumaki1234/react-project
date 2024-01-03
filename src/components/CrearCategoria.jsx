import React, { useState, useEffect } from 'react';
import EditarCategoria from '../../../components/EditarCategoria';
import {
  Button,
  Table,
  Form,
  Input,
  Upload,
  Divider,
  message,
  Select,
} from 'antd';
import { UploadOutlined,PlusOutlined } from '@ant-design/icons';
const { TextArea } = Input;


const CrearCategoriaForm = () => {
  const [tiposYCategorias, setTiposYCategorias] = useState([]);
  const [idTipoProducto, setIdTipoProducto] = useState('');
  const [catNombre, setCatNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagenCategoria, setImagenCategoria] = useState(null);
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const obtenerUrlImagen = (imagenBase64) => `data:image/png;base64,${imagenBase64}`;

  const [newItem, setNewItem] = useState('');

  const handleInputChange = (e) => {
    setNewItem(e.target.value);

   
  };



  const handleAddItem = () => {
    const newItemObject = {
      key: count,
      Título:newItem,
      
    };

    setData([...data, newItemObject]);
    setCount(count+1);
    setNewItem('');
   

  };

  const [fileList, setFileList] = useState([]);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && [e.file];
  };

  


  const beforeUpload = (file) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('Solo puedes subir imágenes');
       // Borrar la lista de archivos
       setFileList([]);
    }
    return isImage;
  };
//PARA EDITAR 
const columns = [
  {
    title: 'Título',
    dataIndex: 'Título',
    width: '15%',
    
  },
  {
    title: 'Descripción',
    dataIndex: 'Descripción',
    width: '15%',
    
  },
  {
    title: 'Imagen',
    dataIndex: 'Imagen',
    width: '20%',
    render: (text, record) => (
      <img src={record.image} alt={`Imagen ${record.key}`} style={{ maxWidth: '100px' }} />
    ),
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
//TERMINA LO DE EDITAR


  useEffect(() => {
    // Obtener la lista de tipos y categorías al cargar el componente
    fetch('http://127.0.0.1:8000/producto/listatiposycategorias/')
      .then(response => response.json())
      .then(data => setTiposYCategorias(data.tipos_y_categorias))
      .catch(error => console.error('Error fetching tipos y categorías:', error));

    // Obtener la lista de categorías al cargar el componente
    fetch('http://127.0.0.1:8000/producto/listar_categorias/')
      .then(response => response.json())
      .then(data => setCategorias(data.categorias))
      .catch(error => console.error('Error fetching categorías:', error));
  }, []);

  const handleEdit = (categoriaId) => {
    setEditingCategoryId(categoriaId);
  };

  const handleCancelEdit = () => {
    setEditingCategoryId(null);
  };

  const handleEditSuccess = () => {
    // Limpiar campos después de editar/crear
    setIdTipoProducto('');
    setCatNombre('');
    setDescripcion('');
    setImagenCategoria(null);
    setEditingCategoryId(null);

    // Recargar la lista de categorías después de editar/crear
    fetch('http://127.0.0.1:8000/producto/listar_categorias/')
      .then(response => response.json())
      .then(data => setCategorias(data.categorias))
      .catch(error => console.error('Error fetching categorías:', error));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('id_tipoproducto', idTipoProducto);
      formData.append('catnombre', catNombre);
      formData.append('descripcion', descripcion);
      formData.append('imagencategoria', imagenCategoria);

      const response = await fetch('http://127.0.0.1:8000/producto/crearcategoria/', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje(data.mensaje);
        setError('');
      } else {
        setMensaje('');
        setError(data.error || 'Hubo un error al realizar la solicitud');
      }
    } catch (error) {
      setMensaje('');
      setError('Hubo un error al realizar la solicitud');
    }
  };

  return (
    <div>



     <Divider orientation="left">
      <h1>Crear/Editar Categoría</h1></Divider>
      <Form onSubmit={handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 140,
        }}
        layout="horizontal"
        style={{
          justifyContent: 'space-between',
          
        }}
      >
         <Form.Item label="Estado"
          style={{maxWidth: '600px'}}
          >
          <Select  placeholder="Selecciona un tipo de producto" >
          {tiposYCategorias.map(tipoCategoria => (
              <Select.Option  key={tipoCategoria.id_tipoproducto} value={tipoCategoria.id_tipoproducto}>
                {tipoCategoria.tpnombre}
              </Select.Option >
            ))}
          </Select>
          </Form.Item>
        <Form.Item label="Título"
        style={{maxWidth: '600px'}}
        >
          <Input 
           type="text"
           value={catNombre}
           onChange={(e) => setCatNombre(e.target.value)}
          required
          />
        </Form.Item>
      
        
     
        <Form.Item label="Descripción"
        style={{maxWidth: '600px'}}
        >
          <TextArea 
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
          rows={4} />
        </Form.Item>
        
        <Form.Item
        style={{maxWidth: '600px'}}
        label="Imagen"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload
          action="/upload.do"
          listType="picture-card"
          fileList={fileList}
          beforeUpload={beforeUpload}
          onChange={({ fileList }) => setFileList(fileList)}
        >
          {fileList.length >= 1 ? null : (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
      </Form.Item>
        <Form.Item className='text-end'>
          <Button onClick={handleAddItem}>Crear Categoría</Button>
        </Form.Item>
        
      </Form>
    {/*  <form onSubmit={handleSubmit}>
        <div>
          <label>Tipo de Producto:</label>
          <select value={idTipoProducto} onChange={(e) => setIdTipoProducto(e.target.value)}>
            <option value="" disabled>Selecciona un tipo de producto</option>
            {tiposYCategorias.map(tipoCategoria => (
              <option key={tipoCategoria.id_tipoproducto} value={tipoCategoria.id_tipoproducto}>
                {tipoCategoria.tpnombre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Nombre de la Categoría:</label>
          <input
            type="text"
            value={catNombre}
            onChange={(e) => setCatNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div>
          <label>Imagen de la Categoría:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImagenCategoria(e.target.files[0])}
          />
        </div>
        <button type="submit">Crear Categoría</button>
      </form>
      {mensaje && <p>Mensaje: {mensaje}</p>}
      {error && <p>Error: {error}</p>}

      <div>
      <h2>Lista de Categorías</h2>
        <ul>
          {categorias.map(categoria => (
            <li key={categoria.id_categoria}>
              <div>
                <strong>{categoria.catnombre}</strong> - {categoria.descripcion}
              </div>
              {categoria.imagencategoria && (
                <img
                src={obtenerUrlImagen(categoria.imagencategoria)}
                alt={`Imagen de ${categoria.catnombre}`}
                style={{ maxWidth: '100px', maxHeight: '100px' }}
              />
              )}
              <button onClick={() => handleEdit(categoria.id_categoria)}>Editar</button>
            </li>
          ))}
        </ul>
        {/* Agrega el componente EditarCategoria si se está editando una categoría */}
       {/* {editingCategoryId && (
          <EditarCategoria
            categoriaId={editingCategoryId}
            onCancel={handleCancelEdit}
            onEdit={handleEditSuccess}
          />
        )}
      </div>*/}
    </div>
  );
};

export default CrearCategoriaForm;