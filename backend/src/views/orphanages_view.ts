import Orphanage from '../models/Orphanage';
import images_view from './images_view';
import imageView from './images_view';

export default {
  render(orphanage: Orphanage) {
    //Pega o orfanato e retorna da maneira que ele precisa ser exibido
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: images_view.renderMany(orphanage.images),
    };
  },

  renderMany(orphanages: Orphanage[]) {
    return orphanages.map((orphanage) => this.render(orphanage));
  },
};
