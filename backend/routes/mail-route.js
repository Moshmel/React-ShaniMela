const nodeMailer = require("nodemailer");


function addRoutes(App)
{
    App.post('/api/form',(req,res)=>{
        var transporter = nodeMailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'shanimela83@gmail.com',
            pass: '39159959sm'
          },
          tls:{
            rejectUnauthorized: false
          }
        });
        var mailOptions = {
          from: 'Shanimela83@gmail.com', // sender address
          to: 'melamed2@gmail.com', // list of receivers
          subject: 'שני ,מישהו השאיר  פרטים באתר שלך ', // Subject line
          html: `
          <h1>פרטים מהאתר</h1>
          <h2>שם : ${req.body.name}</h2>
              <h2>אימייל${req.body.email}</h2>
              <h2>${req.body.message}</h2>
              `
            };
            
            transporter.sendMail(mailOptions, function (err, info) {
              if(err)
              console.log(err)
              else
              console.log(info);
              res.json();
            });
          })
    
}

      module.exports = addRoutes;