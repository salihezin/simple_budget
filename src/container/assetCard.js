import React from "react";
import {Card} from "primereact/card";
import TooltipButton from "../component/tooltipButton";

const AssetCard = ({ cards }) => {
    const footerCard = card => (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <TooltipButton severity="info" icon="pi pi-plus" tooltip="Kayıt Ekle" />
            <TooltipButton severity="success" icon="pi pi-list" tooltip="Kayıtları Gör" />
            <TooltipButton severity="warning" icon="pi pi-pencil" tooltip="Kartı Düzenle" />

            {card.amount !== 0 ? null : <TooltipButton severity="danger" icon="pi pi-trash" tooltip="Kartı Sil" />}
        </div>
    );
    const renderCard = () => (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        }}>
            {cards.map((card) => (
                <div key={card.id} style={{ flex: '0 0 calc(50% - 16px)', marginBottom: '16px' }}>
                    <Card
                        title={card.name}
                        subTitle={card.amount.toLocaleString('tr-TR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                            currency: card.currency,
                        }) + ' ' + card.currency}
                        style={{ padding: 24 }}
                        footer={footerCard(card)}
                    />
                </div>
            ))}
        </div>
    );
    return (
        <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
            {renderCard()}
        </div>
    );
}

export default AssetCard;
