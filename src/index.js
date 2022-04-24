import Plugin from '@goosemod/plugin';

class Sidebar extends Plugin {
    onImport() {
      
      goosemod.patcher.commands.add("sidebar", "collapse sidebar", () => {
	const sidebar = document.getElementsByClassName("sidebar-1tnWFu")[0];
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
