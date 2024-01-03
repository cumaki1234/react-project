import React, { useState, useEffect } from 'react';
import EditarTipoProductoForm from '../../../components/EditarTipoProducto';
import {
  Button,
  Table,
  Form,
  Input,
  Upload,
  Divider,
  message,
} from 'antd';
const CrearTipoProductoForm = () => {
  const [tpNombre, setTpNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [tiposProductos, setTiposProductos] = useState([]);
  const [tipoProductoIdSeleccionado, setTipoProductoIdSeleccionado] = useState(null);
  const { TextArea } = Input;
  const [data, setData] = useState('');


  //COLUMNAS PARA EL TABLE
  const columns = [
    {
      title: 'ID Producto',
      dataIndex: 'IDproducto',
      width: '15%',
      
    },
    {
      title: 'Nombre',
      dataIndex: 'Nombre',
      width: '15%',
    },
    {
      title: 'Descripción',
      dataIndex: 'Descripción',
      width: '15%',
      
    }
  ];


  useEffect(() => {
    // Obtener la lista de tipos de productos al cargar el componente
    fetch('http://127.0.0.1:8000/producto/listarproductos/')
      .then(response => response.json())
      .then(data => setTiposProductos(data.tipos_productos))
      .catch(error => console.error('Error fetching tipos de productos:', error));
  }, []);

  const handleEditarClick = (tipoProductoId) => {
    setTipoProductoIdSeleccionado(tipoProductoId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/producto/creartipop/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tp_nombre: tpNombre,
          descripcion: descripcion,
        }),
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
      <div>
        <Divider>
          <h1>Crear Tipo de Producto</h1>
        </Divider>
        
        
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
        
        <Form.Item label="Título"
        style={{maxWidth: '600px'}}
        >
          <Input 
          type="text"
          value={tpNombre}
          onChange={(e) => setTpNombre(e.target.value)}
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
        <Form.Item className='text-end'>
          <Button>Crear tipo ded producto</Button>
        </Form.Item>
      </Form>
      
      
<div>
      {/* Tabla de avisos */}
      <Divider orientation="left">
        <h3>Lista de Tipos de Productos</h3>
      </Divider>
     
        

      <Table columns={columns} dataSource={data} size="middle" />

      </div>
       {/* <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre del tipo de producto:</label>
            <input
              type="text"
              value={tpNombre}
              onChange={(e) => setTpNombre(e.target.value)}
            />
          </div>
          <div>
            <label>Descripción:</label>
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
          <button type="submit">Crear Tipo de Producto</button>
        </form>
        {mensaje && <p>Mensaje: {mensaje}</p>}
        {error && <p>Error: {error}</p>}
      </div>

      <div>
        <h1>Lista de Tipos de Productos</h1>
        <ul>
          {tiposProductos.map(tp => (
            <li key={tp.id_tipoproducto}>
              {tp.tpnombre} - {tp.descripcion}
              <button onClick={() => handleEditarClick(tp.id_tipoproducto)}>Editar</button>
            </li>
          ))}
        </ul>
        {tipoProductoIdSeleccionado && (
          <EditarTipoProductoForm tipoProductoId={tipoProductoIdSeleccionado} />
        )}
        </div>
        </div>*/}
        </div>
    </div>
  );
};

export default CrearTipoProductoForm;

