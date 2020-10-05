const address = `https://lynn-komang-video-downloader.herokuapp.com`;

export const downloadVideo = (url) => {
  window.open(`${address}/download/video?url=${url}`, '_blank');
};

export const downloadAudio = (url) => {
  window.open(`${address}/download/audio?url=${url}`, '_blank');
};
