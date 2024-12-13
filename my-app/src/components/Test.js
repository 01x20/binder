import React from "react";
import axios from 'axios';

const url = ' http://www.kopis.or.kr/openApi/restful/pblprfr/PF132236?service={88321e991bd3483da21bc7e7d46f1128}';

const ApiTest = () => {
    axios.get(url)
    .then((res) => {
        console.log(res.data);
    });
 return (
    <>
        
    </>
 );
};

export default ApiTest;