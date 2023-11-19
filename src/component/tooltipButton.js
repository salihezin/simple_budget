import React from "react";
import {Tooltip} from "primereact/tooltip";
import {Badge} from "primereact/badge";

const TooltipButton = props => {
    const {severity, icon, tooltip} = props;
    return (
        <div>
            <Tooltip target=".custom-target-icon" />
            <i className={"custom-target-icon pi p-text-secondary p-overlay-badge " + icon}
               data-pr-tooltip={tooltip}
               data-pr-position="right"
               data-pr-at="right+5 top"
               data-pr-my="left center-2"
               style={{ fontSize: '2rem', cursor: 'pointer' }}>
                <Badge severity={severity}></Badge>
            </i>
        </div>
    )
}

export default TooltipButton;
