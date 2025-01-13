import React from 'react';
import Button from './Button';
import AddIcon from '../../icons/add.svg';
import AddIconBlue from '../../icons/addBlue.svg';
import AddIconBlack from '../../icons/addBlack.svg';
import AddIconDis from '../../icons/addDis.svg';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'], // Enables autodocs if Storybook is configured for it
  argTypes: {
    backgroundColor: { control: 'color' },
    labelColor: { control: 'color' },
    label: { control: 'text' },
    icon: { control: 'false' },
    iconPosition: { control: { type: 'radio', options: ['left', 'right'] } },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

// Primary Button
export const Primary = {
  args: {
    variant: 'primary',
    size: "emphasized",
    backgroundColor: "#2467E3",
    labelColor: "#ffffff",
    label: 'Primary Button',
    icon: <img src={AddIcon} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition: 'off',
    disabled: false,
  },
};

export const PrimaryLeftIcon = {
  args: {
    variant: "primary",
    size: "emphasized",
    backgroundColor: "#2467E3",
    labelColor: "#ffffff",
    label: "Primary Button",
    icon: <img src={AddIcon} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition:"left",
    disabled: false
  }
};

export const PrimaryRightIcon = {
  args: {
    variant: "primary",
    size: "emphasized",
    backgroundColor: "#2467E3",
    labelColor: "#ffffff",
    label: "Primary Button",
    icon: <img src={AddIcon} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition:"right",
    disabled: false
  }
};

export const PrimaryDisabled = {
  args: {
    variant: "primary",
    size: "emphasized",
    backgroundColor: "#2467E3",
    labelColor: "#ffffff",
    label: "Primary Button",
    icon: <img src={AddIconDis} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition:"off",
    disabled: true
  }
};

export const PrimaryDisabledLeftIcon = {
  args: {
    variant: "primary",
    size: "emphasized",
    backgroundColor: "#2467E3",
    labelColor: "#ffffff",
    label: "Primary Button",
    icon: <img src={AddIconDis} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition:"left",
    disabled: true
  }
};

export const PrimaryDisabledRightIcon = {
  args: {
    variant: "primary",
    size: "emphasized",
    backgroundColor: "#2467E3",
    labelColor: "#ffffff",
    label: "Primary Button",
    icon: <img src={AddIconDis} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition:"right",
    disabled: true
  }
};



// Secondary Button
export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'emphasized',
    backgroundColor: "#FFFFFF",
    labelColor: "#363F51",
    label: 'Secondary Button',
    icon: <img src={AddIconBlack} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition: 'off',
    disabled: false,
  },
};

export const SecondaryLeftIcon = {
  args: {
    variant: "secondary",
    size: "emphasized",
    backgroundColor: "#FFFFFF",
    labelColor: "#363F51",
    label: "Secondary Button",
    icon: <img src={AddIconBlack} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition:"left",
    disabled: false
  }
};

export const SecondaryRightIcon = {
  args: {
    variant: "secondary",
    size: "emphasized",
    backgroundColor: "#FFFFFF",
    labelColor: "#363F51",
    label: "Secondary Button",
    icon: <img src={AddIconBlack} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition:"right",
    disabled: false
  }
};

export const SecondaryDisabled = {
  args: {
    variant: "secondary",
    size: "emphasized",
    backgroundColor: "#FFFFFF",
    labelColor: "#363F51",
    label: "Secondary Button",
    icon: <img src={AddIconDis} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition:"off",
    disabled: true
  }
};

export const SecondaryDisabledLeftIcon = {
  args: {
    variant: "secondary",
    size: "emphasized",
    backgroundColor: "#FFFFFF",
    labelColor: "#363F51",
    label: "Secondary Button",
    icon: <img src={AddIconDis} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition: "left",
    disabled: true
  }
};

export const SecondaryDisabledRightIcon = {
  args: {
    variant: "secondary",
    size: "emphasized",
    backgroundColor: "#FFFFFF",
    labelColor: "#363F51",
    label: "Secondary Button",
    icon: <img src={AddIconDis} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition: "right",
    disabled: true
  }
};


// Warning Button
export const Warning = {
  args: {
    variant: 'warning',
    size: "emphasized",
    label: 'Warning Button',
    icon:<img src={AddIconBlack} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition: 'off',
    disabled: false,
    backgroundColor: "#FFBD34",
    labelColor: "#14181F"
  },
};

export const WarningLeftIcon = {
  args: {
    variant: "warning",
    size: "emphasized",
    backgroundColor: "#FFBD34",
    labelColor: "#14181F",
    label: "Warning Button",
    icon: <img src={AddIconBlack} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition: "left",
    disabled: false
  }
};

export const WarningRightIcon = {
  args: {
    variant: "warning",
    size: "emphasized",
    backgroundColor: "#FFBD34",
    labelColor: "#14181F",
    label: "Warning Button",
    icon: <img src={AddIconBlack} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition: "right",
    disabled: false
  }
};

export const WarningDisabled = {
  args: {
    variant: "warning",
    size: "emphasized",
    backgroundColor: "#E1E4EB",
    labelColor: "#A3ADC2",
    label: "Warning Button",
    icon: <img src={AddIconDis} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition: "off",
    disabled: true
  }
};

export const WarningDisabledLeftIcon = {
  args: {
    variant: "warning",
    size: "emphasized",
    backgroundColor: "#E1E4EB",
    labelColor: "#A3ADC2",
    label: "Warning Button",
    icon: <img src={AddIconDis} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition: "left",
    disabled: true
  }
};

export const WarningDisabledRightIcon = {
  args: {
    variant: "warning",
    size: "emphasized",
    backgroundColor: "#E1E4EB",
    labelColor: "#A3ADC2",
    label: "Warning Button",
    icon: <img src={AddIconDis} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition: "right",
    disabled: true
  }
};





// Link Button
export const Link = {
  args: {
    variant: 'link',
    size: 'emphasized',
    backgroundColor: 'transparent',
    labelColor: "#2668e3",
    label: 'Link Button',
    icon: <img src={AddIconBlue} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition: 'off',
    disabled: false,
  },
};

export const LinkLeftIcon = {
  args: {
    variant: "link",
    size: "emphasized",
    backgroundColor: "transparent",
    labelColor: "#2668e3",
    label: "Link Button",
    icon: <img src={AddIconBlue} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition: "left",
    disabled: false
  }
};

export const LinkRightIcon = {
  args: {
    variant: "link",
    size: "emphasized",
    backgroundColor: "transparent",
    labelColor: "#2668e3",
    label: "Link Button",
    icon: <img src={AddIconBlue} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition: "right",
    disabled: false
  }
};

export const LinkDisabled = {
  args: {
    variant: "link",
    size: "emphasized",
    backgroundColor: "transparent",
    labelColor: "#2668e3",
    label: "Link Button",
    icon: <img src={AddIconDis} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition: "off",
    disabled: true
  }
};

export const LinkDisabledLeftIcon = {
  args: {
    variant: "link",
    size: "emphasized",
    backgroundColor: "transparent",
    labelColor: "#2668e3",
    label: "Link Button",
    icon: <img src={AddIconDis} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition: "left",
    disabled: true
  }
};

export const LinkDisabledRightIcon = { 
  args: {
    variant: "link",
    size: "emphasized",
    backgroundColor: "transparent",
    labelColor: "#2668e3",
    label: "Link Button",
    icon: <img src={AddIconDis} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
    iconPosition: "right",
    disabled: true
  }
};



// Small Button
export const Compact = {
  args: {
    ...Primary.args,
    size: 'compact',
  },
};

// Medium Button
export const Default = {
  args: {
    ...Primary.args,
    size: 'default',
  },
};

// Large Button
export const Emphasized = {
  args: {
    ...Primary.args,
    size: 'emphasized',
  },
};

