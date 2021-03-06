
export const desktopWrapperStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 2147483647,
    borderRadius: '4px',
    background: 'rgb(229, 229, 229)',
    boxSizing: 'content-box',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 30px',
    overflow: 'hidden'
};

export const desktopClosedWrapperStyleChat = {
    position: 'fixed',
    bottom: '0px',
    right: '0px',
    zIndex: 2147483647,
    minWidth: '400px',
    boxSizing: 'content-box',
    overflow: 'hidden',
    minHeight: '120px'
};

export const mobileClosedWrapperStyle = {
    position: 'fixed',
    bottom: 18,
    right: 18,
    zIndex: 2147483647,
    borderRadius: '50%',
    boxSizing: 'content-box'
};

export const mobileOpenWrapperStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2147483647,
    width: '100%',
    height: '100%',
    background: 'rgb(229, 229, 229)',
    overflowY: 'visible',
    boxSizing: 'content-box'
};

export const desktopTitleStyle = {
    height: '40px',
    lineHeight: '30px',
    fontSize: '18px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px 0 5px 20px',
    fontFamily: 'Lato, sans-serif',
    color: '#fff',
    cursor: 'pointer',
    boxSizing: 'content-box'
};

export const mobileTitleStyle = {
    height: 60,
    width: 60,
    cursor: 'pointer',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    webkitBoxShadow: '1px 1px 4px rgba(101,119,134,.75)',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 7px'
};
