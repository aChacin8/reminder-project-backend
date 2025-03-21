
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import '@/styles/Calendar.scss';

const CalendarComponent = () => {
    return (
        <div className='calendar'>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} //llamamos los plugins del calendario, para realizar las operaciones necesarias
                initialView={'dayGridMonth'} //Esta es la visualización inicial de la pagina (por mes).
                headerToolbar= {{
                    start: 'prev,today,next', //Se asignan los botones de movimiento por meses del calendario
                    center: 'title', //El mes en el que nos encontramos dentro del calendario
                    end: 'dayGridMonth,timeGridWeek,timeGridDay' //Se asignan los botones de visualizacion, por "Mes","Semana" y "Dia"
                }}
                
            />
        </div>
    );
};

export default CalendarComponent;
