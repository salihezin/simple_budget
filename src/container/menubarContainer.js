import React from "react";
import {Button} from "primereact/button";
import {Menubar} from "primereact/menubar";

const MenubarContainer = () => {
    const items = [
        {
            label: 'Kartlar',
            icon: 'pi pi-fw pi-id-card',
            items: [
                {
                    label: 'Varlık Ekle',
                    url: '/add_asset',
                },
                {
                    label: 'Borç Ekle',
                    url: '/add_debt',
                }
            ]
        },
        {
            label: 'Kayıtlar',
            icon: 'pi pi-fw pi-list',
            items: [
                {
                    label: 'Listele',
                },
                {
                    label: 'Ekle',
                }
            ]
        }
    ];
    return (
        <Menubar model={items} end={<Button label="Çıkış" icon="pi pi-power-off" severity="danger" text/>}
                 style={{marginTop: 24}}/>
    );
}

export default MenubarContainer;
