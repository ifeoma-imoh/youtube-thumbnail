import { cloudName } from './cloudinaryConfig';

const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;

const size = 'c_scale,w_1280,h_720,ar_16:9,e_sharpen';
const titleOverlay = (title) =>
  `b_rgb:9994,co_white,l_text:Helvetica_100:${title},c_scale,fl_relative,w_0.8`;
const titleLocation = 'fl_layer_apply,g_south';
const format = 'jpg';

export const buildThumbnailUrl = ({ publicId, version, title }) =>
  `${baseUrl}/${size}/${titleOverlay(
    title
  )}/${titleLocation}/v${version}/${publicId}.${format}`;
