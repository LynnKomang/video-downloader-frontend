const address = process.env.ADDRESS;

export const downloadVideo = (url, props) => {
  window.open(
    `${address}/download/video?url=${url}&props=${encodeURIComponent(JSON.stringify(props))}`,
    '_blank'
  );
};

export const downloadAudio = (url, props) => {
  window.open(
    `${address}/download/audio?url=${url}&props=${encodeURIComponent(JSON.stringify(props))}`,
    '_blank'
  );
};
