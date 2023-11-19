import React, {useEffect, useState} from "react";
import {Dropdown} from "primereact/dropdown";
import {InputNumber} from "primereact/inputnumber";
import BaseContainer from "../../container/baseContainer";
import {Button} from "primereact/button";
import {onValue} from "firebase/database";

const AddAsset = () => {

    const [cards, setCards] = useState([]);
    const [selectedAsset, setSelectedAsset] = useState(null);

    return (
        <BaseContainer>
            <div>
                <Dropdown value={selectedAsset} onChange={(e) => setSelectedAsset(e.value)}
                          options={cards}
                          optionLabel="name"
                          placeholder="Eklenecek Kayıt" style={{width: '100%'}}/>
                <Dropdown value={selectedAsset} onChange={(e) => setSelectedAsset(e.value)}
                          options={cards}
                          optionLabel="name"
                          placeholder="Düşülecek Kayıt" style={{width: '100%', marginTop: 24}}/>
                <InputNumber inputId="currency-turkey" value={2500.01} mode="currency" currency="TRY" locale="tr-TR"
                             inputStyle={{textAlign: 'right'}}
                             style={{width: '100%', marginTop: 24}}/>
                <Button label="KAYDET" style={{width: '100%', marginTop: 24}}/>
            </div>
        </BaseContainer>
    );
}

export default AddAsset;
