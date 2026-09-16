import React from 'react';
import { Icon } from '../core/Icon.jsx';

export const VoiceWaveform = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function VoiceWaveform({ levels = [], bars = 18, height = 20 }, ref) {
  const data = levels.length ? levels : Array.from({ length: bars }, (_, i) => 0.3 + 0.7 * Math.abs(Math.sin(i * 1.1)));
  return (
    <span ref={ref} className="lamp-voice__wave" style={{ height }} aria-hidden="true">
      {data.map((v, i) => <span key={i} className="lamp-voice__bar" style={{ height: Math.max(2, v * height) }} />)}
    </span>
  );
}), { displayName: 'VoiceWaveform' });

export const VoiceButton = /* @__PURE__ */ Object.assign(/* @__PURE__ */ React.forwardRef(function VoiceButton({ state = 'idle', size = 'md', duration, levels, label, onPress, onCancel, onSend, className = '', ...rest }, ref) {
  const recording = state === 'recording';
  const glyph = state === 'processing' ? 'progress_activity' : state === 'speaking' ? 'volume_up' : recording ? 'stop' : 'mic';
  const text = label || (recording ? 'Recording' : state === 'processing' ? 'Processing' : state === 'speaking' ? 'Speaking' : state === 'error' ? 'Microphone unavailable' : 'Hold to speak');
  return (
    <span ref={ref} className={'lamp-voice ' + className} {...rest}>
      <button type="button" aria-label={text} aria-pressed={recording}
        className={['lamp-voice__btn', recording && 'lamp-voice__btn--recording', size === 'lg' && 'lamp-voice__btn--lg'].filter(Boolean).join(' ')}
        onClick={onPress}>
        <Icon name={glyph} size={size === 'lg' ? 28 : 22} />
      </button>
      {recording ? <VoiceWaveform levels={levels} /> : null}
      {duration ? <span className="lamp-voice__time">{duration}</span> : null}
      {!recording && state === 'idle' ? <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{text}</span> : null}
    </span>
  );
}), { displayName: 'VoiceButton' });
