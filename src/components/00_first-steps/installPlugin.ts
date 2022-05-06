export interface Plugin {
  compatibleVersion: number;
  install: () => void;
}

export default function installPlugin(plugin: Plugin) {
  if (plugin.compatibleVersion > 3) {
    return plugin.install();
  }

  throw new Error('Unsupported plugin version');
}
