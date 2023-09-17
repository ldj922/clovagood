const raittoData = [
    // ... 데이터
  ];
  exports.handler = async function(event, context) {
    const karaoke = raittoData.filter(item => item.category === '노래방');
    return {
      statusCode: 200,
      body: JSON.stringify(karaoke)
    };
  };
  