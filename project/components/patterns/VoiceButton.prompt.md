Voice capture for field and low-literacy surfaces: 48px default, 64px where voice is the primary input. Always paired with a transcript and a text alternative.

```jsx
<VoiceButton state="recording" duration="0:06" levels={levels} onPress={stop} />
<VoiceButton size="lg" label="Hold to speak" onPress={start} />
```

Gold ring only while actually recording. Never the only way to complete an action.
