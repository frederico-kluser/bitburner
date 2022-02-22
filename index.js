/* eslint-disable no-plusplus */
/* eslint-disable vars-on-top */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-var */

export async function main(ns) {
  while (true) {
    var hosts = ['home', 'n00dles', 'foodnstuff', 'sigma-cosmetics', 'joesguns', 'hong-fang-tea', 'nectar-net', 'harakiri-sushi', 'iron-gym'];
    var index = 0;

    while (index < hosts.length) {
      var hostname = hosts[index];
      ns.print(hostname);
      index++;
    }
  }
}
