import { useEffect, useState } from 'react';
import api from '../services/api';

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    api.get('/patients') // ajuste conforme sua rota
      .then(response => setPatients(response.data))
      .catch(error => console.error('Erro ao buscar pacientes:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Pacientes</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Documento</th>
            <th>Tipo Sanguíneo</th>
            <th>Alergias</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.full_name}</td>
              <td>{p.document}</td>
              <td>{p.blood_type}</td>
              <td>{p.allergies}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;