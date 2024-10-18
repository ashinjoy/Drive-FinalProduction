import express from "express";
// import http from 'http'
import cookieParser from "cookie-parser";
// import paymentRouter from "../interface/routes/paymentRoute.js";
import userRouter from "../interface/routes/userRoute.js";
import driverRouter from "../interface/routes/driverRoutes.js";
import adminRouter from '../interface/routes/adminRoutes.js'




const createServer = () => {
  const app = express();
  
  app.use(cookieParser())
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());


    app.use('/api/payment/user',userRouter)
    app.use('/api/payment/driver',driverRouter)
    app.use('/api/payment/admin',adminRouter)

  return app
};

export { createServer };