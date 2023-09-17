const raittoData = [
    // ... 데이터
  ];
  exports.handler = async function(event, context) {
    const pcRooms = raittoData.filter(item => item.category === 'PC방');
    return {
      statusCode: 200,
      body: JSON.stringify(pcRooms)
    };
  };
  