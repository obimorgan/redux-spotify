import React from "react";
import { useState, useRef } from "react";
import './sidebar.css'
import SidebarContent from './SidebarContents'
const Sidebar = () => {
    const sidebarRef = useRef(null);
    const [isResizing, setIsResizing] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(268);

    const startResizing = React.useCallback((mouseDownEvent) => {
        setIsResizing(true);
    }, []);

    const stopResizing = React.useCallback(() => {
        setIsResizing(false);
    }, []);

    const resize = React.useCallback(
        (mouseMoveEvent) => {
            if (isResizing) {
                setSidebarWidth(
                    mouseMoveEvent.clientX -
                    sidebarRef.current.getBoundingClientRect().left
                );
            }
        },
        [isResizing]
    );

    React.useEffect(() => {
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResizing);
        return () => {
            window.removeEventListener("mousemove", resize);
            window.removeEventListener("mouseup", stopResizing);
        };
    }, [resize, stopResizing]);

    return (
        <>
            <div
                ref={sidebarRef}
                className="app-sidebar"
                style={{ width: sidebarWidth }}
                onMouseDown={(e) => e.preventDefault()}
            >
                <div className="app-sidebar-content" />
                {/* ---- */}
                <SidebarContent />
                <div className="app-sidebar-resizer" onMouseDown={startResizing} />
            </div>
        </>
    );
}

export default Sidebar