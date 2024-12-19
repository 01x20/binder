const express = require('express');
const axios = require('axios');
const cors = require('cors');

// 프록시 서버 생성 함수
  const app = express();

  app.use(cors()); // CORS 허용

  // 프록시 엔드포인트 설정
  app.get('/api/*', async (req, res) => {
      try {
          const targetUrl = `http://kopis.or.kr/${req.params[0]}`;
          const response = await axios.get(targetUrl, { params: req.query });
          res.send(response.data);
      } catch (error) {
          res.status(500).send({ error: 'Proxy error', details: error.message });
      }
  });

  // 프록시 서버 실행
  const PORT = 3001;
  app.listen(PORT, () => {
      console.log(`Proxy server running at http://localhost:${PORT}`);
  });

