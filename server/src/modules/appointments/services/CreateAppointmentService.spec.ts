import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '121212',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('121212');
  });

  // it('should not be able to create two appointments in same time', async () => {
  //   const fakeAppointmentsRepository = new FakeAppointmentsRepository();
  //   const createAppointment = new CreateAppointmentService(
  //     fakeAppointmentsRepository,
  //   );

  //   const appointment1 = await createAppointment.execute({
  //     date: new Date(),
  //     provider_id: '121212',
  //   });

  //   const appointment2 = await createAppointment.execute({
  //     date: new Date(),
  //     provider_id: '121212',
  //   });

  //   expect(appointment1.date).toEqual(appointment2.date);
  // });
});
