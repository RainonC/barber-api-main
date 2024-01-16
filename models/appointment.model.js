// appointment.model.js
module.exports = (sequelize, Sequelize) => {
    const Appointment = sequelize.define("appointments", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      barberID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      clientID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      day: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
    return Appointment;
  };
  