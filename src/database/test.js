
const Database = require('./db'); //ou db.js
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    await saveOrphanage(db, {
        lat: '-25.4659554',
        lng: '-49.3305856',
        name: 'Lar dos maninos',
        about: 'presta assistencia blabalblablalblab',
        whatsapp: '419999-1111',
        images: [
            "https://images.unsplash.com/photo-1600447550413-9b5446639f52?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "https://images.unsplash.com/photo-1600752384899-7d3dcbb2428c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        ].toString(),
        instructions: "instrução de acesso  dalsçd kalçsdk açlsdk",
        opening_hours: "horario de visitas é 545645456",
        open_on_weekends: "0"
    })

    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //deletar
    //console.log(await db.run("DELETE FROM orphanages where id = '4'"))
})