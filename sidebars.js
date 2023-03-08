/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  cocklandSidebar: [
    {
      type: "category",
      label: "NTN Land",
      items: ["ntn_land/intro", "ntn_land/update"],
      collapsible: false,
    },
  ],
};

module.exports = sidebars;
