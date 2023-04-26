const indexCtrl={};

indexCtrl.renderIndex = async (req, res)=>{
    res.render('pages/index');
};
indexCtrl.renderAbout = async (req, res)=>{
    res.render('pages/about');
};
indexCtrl.renderPortafolio = async (req, res)=>{
    res.render('pages/portafolio');
};
indexCtrl.renderContact = async (req, res)=>{
    res.render('pages/contact');
};

module.exports = indexCtrl;