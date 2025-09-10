declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext
  }
}

export const beep = (freq = 750, duration = 150, vol = 5) => {
  const AudioContext = window.AudioContext || window.webkitAudioContext || false;
  if (!AudioContext) {
    console.warn("Sorry, but Web Audio API is not supported by your browser");
    return;
  }
  const context = new AudioContext();
  if (context == null) return;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.connect(gain);
  oscillator.frequency.value = freq;
  oscillator.type = "square";
  gain.connect(context.destination);
  gain.gain.value = vol * 0.01;
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + duration * 0.001);
};

export enum WorkerType {
  WASM= "wasm",
  JS_QR= "jsQr"
}
