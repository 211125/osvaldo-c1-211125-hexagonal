import { Model, DataType, Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import User from '../../../users/infraestructure/models/userModel';  // Asume que tienes un modelo User en ese path

@Table({
    tableName: 'reviews',
    timestamps: true 
})
export default class ReviewModel extends Model {
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    })
    public id!: number;
    
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false
    })
    public userId!: number;

    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false
    })
    public bookId!: number;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public status!: string;
    
    @BelongsTo(() => User)
    public user!: User;
}
