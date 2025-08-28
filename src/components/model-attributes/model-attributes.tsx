'use client'
import './model-attributes.scss'
import Select from "@/ui/select/select";
import {useState} from "react";
import InputBlock from "@/shared/inputBlock/inputBlock";
import Switch from "@/ui/switch/switch";

const ModelAttributes = () => {
    const [age, setAge] = useState<string[]>(['18-21 years old']);
    const [cupSiz, setCupSiz] = useState<string[]>(['A']);
    const [bodyType, setBodyType] = useState<string[]>(['Petite']);
    const [abs, setAbs] = useState<string[]>(['Four-pack']);
    const [hairColor, setHairColor] = useState<string[]>(['Choose']);
    const [hairLength, setHairLength] = useState<string[]>(['Bald / Shaved']);
    const [areaStyle, setAreaStyle] = useState<string[]>(['Completely shaved']);
    const [languages, setLanguages] = useState<string[]>(['English']);
    const [ethnicity, setEthnicity] = useState<string[]>(['White']);
    const [hovered, setHovered] = useState<boolean>(false);


    const ageCategory = [
        {value: '18-21 years old', label: '18-21 years old'},
        {value: '22–25 years old ', label: '22–25 years old '},
        {value: '26–30 years old ', label: '26–30 years old'},
        {value: '31–35 years old ', label: '31–35 years old '},
        {value: ' 36–45 years old ', label: '36–45 years old  '},
        {value: '45-55 years old ', label: ' 45-55 years old'},

    ];

    const cupSizItems = [
        {value: 'A', label: 'A'},
        {value: 'B', label: 'B'},
        {value: 'C', label: 'C'},
        {value: 'D', label: 'D'},
        {value: 'E', label: 'E'},
        {value: 'F', label: 'F'},
        {value: 'G', label: 'G'},

    ];
    const bodyItems = [
        {value: 'Petite', label: 'Petite'},
        {value: 'Slim', label: 'Slim'},
        {value: 'Average', label: 'Average'},
        {value: 'Muscular', label: 'Muscular'},
        {value: 'Curvy', label: 'Curvy'},
        {value: 'BBW', label: 'BBW'},

    ];
    const absItems = [
        {value: 'Four-pack', label: 'Four-pack'},
        {value: 'Six-pack', label: 'Six-pack'},
        {value: 'Eight-pack', label: 'Eight-pack'},

    ];
    const hairColorItems = [
        {value: 'Choose', label: 'Choose'},
        {value: 'black', label: 'black'},

    ];
    const hairLengthItems = [
        {value: 'Bald / Shaved', label: 'Bald / Shaved'},
        {value: 'Very Short Hair', label: 'Very Short Hair'},
        {value: 'Short Hair (Above Shoulders)', label: 'Short Hair (Above Shoulders)'},
        {value: 'Medium Hair ', label: 'Medium Hair '},
        {value: 'Long Hair', label: 'Long Hair'},
        {value: 'Very Long Hair', label: 'Very Long Hair'},

    ];
    const areaStyleItems = [
        {value: 'Completely shaved', label: 'Completely shaved'},
        {value: 'Styled / Trimmed', label: 'Styled / Trimmed'},
        {value: 'Hairy', label: 'Hairy'},
        {value: 'Full Bush', label: 'Full Bush'},

    ];
    const languagesItems = [
        {value: 'English', label: 'English'},
        {value: 'Spanish', label: 'Spanish'},

        {value: 'French', label: 'French'},
        {value: 'German', label: 'German'},
        {value: 'Italian', label: 'Italian'},
        {value: 'Portuguese', label: 'Portuguese'},
        {value: 'Russian', label: 'Russian'},
        {value: 'Ukrainian', label: 'Ukrainian'},
        {value: 'Polish', label: 'Polish'},
        {value: 'Arabic', label: 'Arabic'},
        {value: 'Hebrew', label: 'Hebrew'},
        {value: 'Turkish', label: 'Turkish'},
        {value: 'Persian / Farsi', label: 'Persian / Farsi'},
        {value: 'Hindi ', label: 'Hindi '},
        {value: 'Chinese (Mandarin / Cantonese) ', label: 'Chinese (Mandarin / Cantonese) '},
        {value: 'Japanese', label: 'Japanese'},
        {value: 'Korean', label: 'Korean'},
        {value: 'Vietnamese', label: 'Vietnamese'},


    ]


    const ethnicities = [
        {value: 'White', label: 'White'},
        {value: 'Slavic', label: 'Slavic'},
        {value: 'Caucasian', label: 'Caucasian'},
        {value: 'Latina', label: 'Latina'},
        {value: 'Brazilian', label: 'Brazilian'},
        {value: 'Black', label: 'Black'},
        {value: 'Afro-Caribbean ', label: 'Afro-Caribbean '},

        {
            value: 'Asian',label:'Asian', valueItems: [
                {value: 'Chinese', label: 'Chinese'},
                {value: 'Japanese', label: 'Japanese'},
                {value: 'Korean', label: 'Korean'},
                {value: 'Thai', label: 'Thai'},
                {value: 'Vietnamese', label: 'Vietnamese'},
                {value: 'Indonesian', label: 'Indonesian'}

            ]
        },
        {
            value: 'Middle Eastern ',label:'Middle Eastern', valueItems: [
                {value: 'Indian', label: 'Indian'},
                {value: 'Arabian ', label: 'Arabian '},
                {value: 'Persian', label: 'Persian'},

            ]
        },

        {value: 'Native American', label: 'Native American'},
        {value: 'Mixed', label: 'Mixed'},

    ];


    return <>
        <div className='p-category-header G-align-center'>
            <div className='G-center'>
                <i className='icon icon-check'></i>
            </div>
            <p>Model Attributes</p>
        </div>

        <div className='attributes-columns G-flex'>
            <div className='attribute-column G-flex-column'>

                <div onMouseLeave={() => setHovered(false)} className='age-category-select'>

                    <div  className='age-select-titles G-align-center'>
                        <p>Age category*</p>
                        <i onMouseEnter={() => setHovered(true)} className={`icon icon-info ${hovered ? 'active' : ''}`}></i>
                    </div>

                    <Select
                        label=""
                        required
                        options={ageCategory}
                        value={age}
                        onChange={setAge}
                        placeholder="18-21 years old"

                    />
                    <div className={`select-clue ${hovered ? 'active' : ''}`}>
                        <p>
                            You can list your age up to 5 years younger than your real one — just a little flirt with fantasy. But don’t go too far: many clients are actually into MILFs or dream of a wifey vibe. Being your real hot self is often the biggest turn-on
                        </p>
                    </div>

                </div>

                <InputBlock name={'name'} placeholder={'4\'3"'} inputTitle={'Height*'} className={'attribute-input'}
                            variant={'lightPeach'}/>


                <div className='a-choose-block G-flex-column'>
                    <Select
                        label="Cup Size*"
                        required
                        options={cupSizItems}
                        value={cupSiz}
                        onChange={setCupSiz}
                        placeholder="A"

                    />
                    <div className='a-choose-switch G-flex-column'>
                        <Switch name={'Natural Breasts'} variant={'orange-switch'}/>
                        <Switch name={'Implants'} active={true} variant={'orange-switch'}/>

                    </div>
                </div>


                <div className='a-choose-block G-flex-column'>
                    <Select
                        label="Body Type*"
                        required
                        options={bodyItems}
                        value={bodyType}
                        onChange={setBodyType}
                        placeholder="Petite"
                    />
                    <div className='a-choose-switch G-flex-column'>
                        <Switch name={'Big natural ass'} variant={'orange-switch'}/>
                        <Switch name={'Ass implants'} active={true} variant={'orange-switch'}/>
                        <Switch name={'Gym ass type'} variant={'orange-switch'}/>

                    </div>
                </div>


                <Select
                    label="Abs"
                    required
                    options={absItems}
                    value={abs}
                    onChange={setAbs}
                    placeholder="Four-pack"
                />

                <InputBlock name={'name'} placeholder={'Skip'} inputTitle={'Foot size'} className={'attribute-input'}
                            variant={'lightPeach'}/>


            </div>

            <div className='attribute-column attribute-big-column G-flex-column'>
                <Select
                    label="Hair Color*"
                    required
                    options={hairColorItems}
                    value={hairColor}
                    onChange={setHairColor}
                    placeholder="Choose"
                />


                <Select
                    label="Hair length*"
                    required
                    options={hairLengthItems}
                    value={hairLength}
                    onChange={setHairLength}
                    placeholder="Bald / Shaved"
                />


                <Select
                    label="Bikini Area Style*"
                    required
                    options={areaStyleItems}
                    value={areaStyle}
                    onChange={setAreaStyle}
                    placeholder="Completely shaved"
                />


                <div className='a-choose-block G-flex-column'>

                    <h2 className='a-block-title'>Body art</h2>
                    <div className='a-choose-switch G-flex-column'>
                        <Switch name={'Tattoos'} active={true} variant={'orange-switch'}/>
                        <Switch name={'Piercing'} variant={'orange-switch'}/>
                        <Switch name={'Glasses'} variant={'orange-switch'}/>

                    </div>
                </div>


                <Select
                    label="Languages*"
                    required
                    options={languagesItems}
                    value={languages}
                    onChange={setLanguages}
                    placeholder="Choose"
                />


                <Select
                    label="Ethnicity*"
                    required
                    options={ethnicities}
                    value={ethnicity}
                    onChange={setEthnicity}
                    placeholder="White"
                />

            </div>

        </div>
    </>
};

export default ModelAttributes;