/**
 *  THIS IS JUST AN EXAMPLE FILE
 *  ALSO PART OF DOCUMENTATION
 */
module.exports = {
    /**
     *  ARCH - Processor Architecture:
     *  x64 - 64 Bits
     *  amd64 - 64 Bits
     *  64 - 64 Bits
     * 
     *  x86 - 32 Bits
     *  32 - 32 Bits
     *  i386 - 32 Bits
     */
    arch: 'x64',
    
    /**
     *  OS - Operation System:
     *  windows - Windows Based Systems
     *  macOS - Desktop Apple Systems
     *  linux - Linux Based Systems
     *  unix - Unix Based Systems
     *  android - Google Mobile Operation Systems
     *  ios - Apple Mobile Operation Systems
     *  other - A Operation System that not fit to other mentioned Systems
     */
    os: 'linux',

    /**
     * OS_VERSION - Operation System Version
     * For Windows:
     * xp
     * 7
     * 8
     * 8.1
     * 10
     * 
     * For MacOS:
     * //TODO: Add for MacOS
     * 
     * For Linux:
     * //TODO: Add for Linunx
     */
    os_version: '5.0.0-31-generic',

    /**
     *  DIST - Distro
     *  Only available if has linux/unix OS
     *  
     *  Linux:
     *  ubuntu
     *  mint 
     *  fedora
     *  opensuse
     *  elementary_os
     *  manjaro
     *  kali
     *  kde_neon
     * 
     *  Unix:
     *  //TODO: ADD UNIX SYSTEMS
     * 
     *  Neither:
     *  other
     */
    dist: 'kde_neon',

    /**
     * DIST_VERSION - Distro Version
     * Specific Version of each DIST
     */
    dist_version: '5.16',

    /**
     * MEM - RAM MEMORY
     */

    /**
     * SWAP - SYSTEM SWAP SIZE
     * Size in MB
     */
    swap: 10843,

    /**
     * SWAP_TYPE - The type of swap:
     * file
     * partition
     */
    swap_type: 'partition',
}