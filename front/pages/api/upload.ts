// // pages/api/upload.ts
// import type { NextApiRequest, NextApiResponse } from 'next';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { name, artist, details } = req.body;

//     console.log('Received data:', { name, artist, details });


//     // 여기서 서버로 데이터를 처리하거나 데이터베이스에 저장할 수 있습니다.
//     // 예: 데이터베이스 연결 및 저장 로직

//     res.status(200).json({ message: 'Data received', data: { name, artist, details } });
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }
