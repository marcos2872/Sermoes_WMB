import pt from '../../sermons.json';
import pt_en from '../../sermons2.json';

export default function () {
  return pt.map(data => {
    const audio = pt_en.find(({title}) => title === data.title);
    return {
      ...data,
      audio_en: audio?.audio,
    };
  });
}
