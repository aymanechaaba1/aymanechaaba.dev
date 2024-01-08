import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'deywpwmdq',
  api_key: '832479463176767',
  api_secret: process.env.CLOUDINARY_SECRET,
});

export default cloudinary;
