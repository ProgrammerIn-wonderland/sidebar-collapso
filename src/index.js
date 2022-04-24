import Plugin from '@goosemod/plugin';

class Sidebar extends Plugin {
    onImport() {
      const sidebar = document.getElementsByClassName("sidebar-1tnWFu")[0];
      goosemod.patcher.commands.add("sidebar", "collapse sidebar", () => {
        if (sidebar.style.display === 'none') {
          sidebar.style.display = '';
        } else {
          sidebar.style.display = 'none';
        }
      })
    }

    onRemove() {
      
    }
};

export default new Sidebar();
