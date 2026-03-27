import axios from 'axios';

// --- E (EXTRACT) ---
// Definimos uma Interface para saber exatamente o que vem da API externa
interface ExternalUser {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

interface LocalUser {
  userId: number;
  fullName: string;
  contact: string;
  location: string;
  processedAt: Date;
}

async function runETL() {
  try {
    console.log("--- Iniciando Extração ---");
    // Extração (Extract)
    const response = await axios.get<ExternalUser[]>('https://jsonplaceholder.typicode.com/users');
    const rawData = response.data;
    console.log(`Extraídos ${rawData.length} usuários.`);

    console.log("--- Iniciando Transformação ---");
    // Transformação (Transform)
    const transformedData: LocalUser[] = rawData.map(user => {
      return {
        userId: user.id,
        fullName: user.name.toUpperCase(), // Transformação simples: Nome em caixa alta
        contact: user.email.toLowerCase(),
        location: user.address.city,
        processedAt: new Date()
      };
    });

    // --- L (LOAD) ---
    // Simulação de carga em um banco ou apenas logar o resultado
    console.log("--- Resultado Final (Load) ---");
    console.table(transformedData.slice(0, 3)); // Exibe os 3 primeiros para teste

  } catch (error) {
    console.error("Erro no processo ETL:", error);
  }
}

runETL();