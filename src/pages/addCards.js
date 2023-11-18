import React from 'react';
import {Divider} from 'primereact/divider';
import {Button} from 'primereact/button';
import { Card } from 'primereact/card';

const AddCards = () => {
    const headerAccount = (
        <img alt="Card" src="https://finrota.com/wp-content/uploads/2022/09/banka-hesap-hareketleri-entegrasyonu.webp" height={180}/>
    );

    const headerDebt = (
        <img alt="Card" src="https://i.dunya.com/storage/files/images/2023/03/04/borc-para-3ZqK_cover.jpg" height={180}/>
    );

    const footerAccount = (
            <Button label="Hesap Kartı Ekle" icon="pi pi-wallet" className="w-100" />
    );

    const footerDebt = (
            <Button label="Borç Kartı Ekle" icon="pi pi-chart-line" className="w-100" />
    );

    return (
        <div style={{flexDirection: 'row', display:'flex', justifyContent: 'center', margin: 48}}>
            <div style={{width: '45%'}}>
                <Card title="Varlık" subTitle="Hesap Ekle" footer={footerAccount} header={headerAccount} className="md:w-25rem">
                    Buradan hesap ekleyebilirsiniz.
                    <br/>
                    <br/>
                    Örneğin Ziraat 5002 nolu hesabım
                </Card>
            </div>
            <Divider layout="vertical" />
            <div style={{width: '45%'}}>
                <Card title="Borç" subTitle="Borç Türü Ekle" footer={footerDebt} header={headerDebt} className="md:w-25rem">
                    Buradan borç ekleyebilirsiniz.
                    <br/>
                    <br/>
                    Örneğin Kredi Kartı, Kredi, Borç, vb.
                </Card>
            </div>
        </div>
    )
}

export default AddCards;
