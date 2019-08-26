// See https://github.com/vuejs/vuepress/issues/613 for below example code source
const dirTree = require('directory-tree');
const path = require('path');


// Returns an array of file basenames in subDirPath, due to the usage of
// __dirname paths must be relative to the path of the file running this
function sidebarChildren(subDirPath) 
{
    var files = [];
    dirTree(path.join('docs/', subDirPath)
          ,{extensions:/\.md/}
          ,(item, PATH) => files.push(item));

    // extract file basenames so we can sort by number
    files = files.map(children => {
        return path.join.apply(null, children.path.split(path.sep).slice(2)).slice(0,-3);
    });

    files = files.filter((file) => !(/README/g.test(file)));
    console.error("sidebarData")
    console.error(files)
    
    files.sort(
        (a,b) => {
            if (Number(a) && Number(b))
            {
                return a - b;
            } else {
                return a.localeCompare(b);
            }
        } 
    ); 
    return files;
}

module.exports = {
  title: "MITRE InSpec Advanced Developer Course",
  description:
    "The MITRE InSpec Team's Advanced course for InSpec Profile and Resource Development",

  themeConfig: {
    repo: 'mitre/inspec-advanced-developer',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    //docsRepo: 'vuejs/vuepress',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
    sidebar: {
      '/course/': sidebarChildren('./course'),
      '/installation/': sidebarChildren('./installation'),
      '/resources/': sidebarChildren('./resources')
    },
    sidebarDepth: 4,
    navbar: "auto",
    nav: [
      {
        text: "Course",
        link: "/course/1"
      },
      {
        text: "Install",
        items: [
          {
            text: "Linux",
            link: "/installation/LinuxInstall.md"
          },
          {
            text: "Mac",
            link: "/installation/MacInstall.md"
          },
          {
            text: "Windows",
            link: "/installation/WindowsInstall.md"
          },
          {
            text: "Vagrant Install",
            link: "/installation/vagrant_install.md"
          }
        ]
      },
      {
        text: "Resources",
        link: "/resources/"
      },
      {
        text: "Contact",
        link: "/contact.md"
      }
    ]
  },
  markdown: {
    lineNumbers: true,
    anchor: {
      permalink: true
    },
    // options for markdown-it-toc
    toc: {
      includeLevel: [1, 2, 3, 4]
    }
  }
};
