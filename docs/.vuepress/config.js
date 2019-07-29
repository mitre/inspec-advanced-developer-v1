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
    sidebar: "auto",
    sidebarDepth: 4,
    navbar: "auto",
    nav: [
      {
        text: "Course",
        link: "./"
      },
      {
        text: "Install",
        items: [
          {
            text: "Linux",
            link: "./installation/LinuxInstall.md"
          },
          {
            text: "Mac",
            link: "./installation/MacInstall.md"
          },
          {
            text: "Windows",
            link: "./installation/WindowsInstall.md"
          },
          {
            text: "Vagrant Install",
            link: "./installation/vagrant_install.md"
          }
        ]
      },
      {
        text: "Resources",
        link: "./resources/"
      },
      {
        text: "Contact",
        link: "contact.md"
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
