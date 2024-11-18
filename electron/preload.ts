import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
    runPython: (script: string) => ipcRenderer.invoke('run-python', script)
});