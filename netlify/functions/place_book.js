const raittoData = [
    // ... 데이터
  ];
  exports.handler = async function(event, context) {
    const bookstores = raittoData.filter(item => item.category === '책방');
    return {
      statusCode: 200,
      body: JSON.stringify(bookstores)
    };
  };
  