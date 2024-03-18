import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkTextValidity } from '../utils';
import { checkNumberValidity } from '../utils';
import { useCookies } from 'next-client-cookies';

export function ManualSetUp() {
    const [whsData, setWhsData] = useState({
        name: 'Mag1',
        x: 0.01,
        y: 0.01,
        z: 0.01
    });

    const [errors, setErrors] = useState({
        name: '',
        x: '',
        y: '',
        z: ''
    });

    const router = useRouter();
    
    const handleChange = (e) => {
        const input = e.target;
        const value = input.value.trim();

        if(!input.checkValidity()) {
            input.focus();
            input.reportValidity();
        }
        setWhsData(prevState => ({
            ...prevState,
            [input.name]: value
        }));
    };

    const checkData = () => {
        let validity = 'true';
        if(!checkTextValidity(whsData.name)) {
            setErrors(prevState => ({
                ...prevState,
                'name': `Il nome "${whsData.name}" non è valido. Sono ammessi solo lettere e numeri.`
            }));
            validity = false;
        }
        else {
            setErrors(prevState => ({
                ...prevState,
                'name': ''
            }));
        }
        if(!checkNumberValidity(whsData.x)) {
            setErrors(prevState => ({
                ...prevState,
                'x': `Il valore "${whsData.x}" non è valido. Sono ammessi solo numeri positivi con al massimo 2 cifre decimali.`
            }));
            validity = false;
        }
        else {
            setErrors(prevState => ({
                ...prevState,
                'x': ''
            }));
        }
        if(!checkNumberValidity(whsData.y)) {
            setErrors(prevState => ({
                ...prevState,
                'y': `Il valore "${whsData.y}" non è valido. Sono ammessi solo numeri positivi con al massimo 2 cifre decimali.`
            }));
            validity = false;
        }
        else {
            setErrors(prevState => ({
                ...prevState,
                'y': ''
            }));
        }
        if(!checkNumberValidity(whsData.z)) {
            setErrors(prevState => ({
                ...prevState,
                'z': `Il valore "${whsData.z}" non è valido. Sono ammessi solo numeri positivi con al massimo 2 cifre decimali.`
            }));
            validity = false;
        }
        else {
            setErrors(prevState => ({
                ...prevState,
                'z': ''
            }));
        }
        return validity;
    };

    const cookies = useCookies();

    function handleSubmit(e) {
        e.preventDefault();

        if(checkData()) {
            Object.entries(whsData).forEach(([key, value]) => {
                cookies.set(key, value);
            })
            /*try {
                const data = new FormData()
                // Turn our whsData state into data we can use with a form submission
                Object.entries(whsData).forEach(([key, value]) => {
                    data.append(key, value);
                })

                // POST the data to the URL of the form
                /*
                fetch('./wms.js', {
                    method: "POST",
                    body: data,
                    headers: {
                    'accept': 'application/json',
                    },
                })*/
                                
                router.push('/wms');
            //}
            /*catch (error) {
                // Handle error if necessary
                console.error(error);
            } 
            finally {
                setWhsData({
                    name: 'Mag1',
                    x: 0.01,
                    y: 0.01,
                    z: 0.01
                });
            }*/
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6">
                <div className="w-full">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome: </label>
                    <input id="name" name="name" type="text" pattern="[a-zA-Z0-9]+$" title="Sono ammessi solo numeri e lettere" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" value={whsData.name} onChange={handleChange} placeholder='Inserisci nome' required />
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.name ?  errors.name : ''}</p>
                </div>
                <div className="w-full">
                    <label htmlFor="x" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Larghezza (mt): </label>
                    <input id="x" name="x" type="number" step="0.01" min="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" value={whsData.x} onChange={handleChange} placeholder='Inserisci larghezza' required />
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.x ?  errors.x : ''}</p>
                </div>
                <div className="w-full">
                    <label htmlFor="y" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Altezza (mt): </label>
                    <input id="y" name="y" type="number" step="0.01" min="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" value={whsData.y} onChange={handleChange} placeholder='Inserisci altezza' required />
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.y ?  errors.y : ''}</p>
                </div>
                <div className="w-full">
                    <label htmlFor="z" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profondità (mt): </label>
                    <input id="z" name="z" type="number" step="0.01" min="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" value={whsData.z} onChange={handleChange} placeholder='Inserisci profondità' required />
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.z ?  errors.z : ''}</p>
                </div>
            </div>
            <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-teal-700 rounded-lg focus:ring-4 focus:ring-teal-200 dark:focus:ring-teal-900 hover:bg-teal-800">
              Crea
            </button>
        </form>
    );
}