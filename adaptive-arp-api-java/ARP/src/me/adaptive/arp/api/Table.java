/*
 * =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
 *
 * (C) Copyright 2013-2014 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 * Original author:
 *
 *     * Carlos Lozano Diez
 *                 <http://github.com/carloslozano>
 *                 <http://twitter.com/adaptivecoder>
 *                 <mailto:carlos@adaptive.me>
 *
 * Contributors:
 *
 *     * Ferran Vila Conesa
 *              <http://github.com/fnva>
 *              <http://twitter.com/ferran_vila>
 *              <mailto:ferran.vila.conesa@gmail.com>
 *
 * =====================================================================================================================
 */

package me.adaptive.arp.api;

/**
 * @author Ferran Vila Conesa
 * @see me.adaptive.arp.api.IDatabase
 * @see me.adaptive.arp.api.Database
 * @since ARP1.0
 */
public class Table {

    /**
     * Name of the table.
     *
     * @since ARP1.0
     */
    private String name;
    /**
     * Number of columns.
     *
     * @since ARP1.0
     */
    private int columnCount;

    /**
     * Number of rows.
     *
     * @since ARP1.0
     */
    private int rowCount;

    /**
     * Definition of columns.
     *
     * @since ARP1.0
     */
    private Column[] columns;

    /**
     * Rows of the table containing the data.
     *
     * @since ARP1.0
     */
    private Row[] rows;

    /**
     * Constructor by default
     *
     * @param name The name of the table
     */
    public Table(String name) {
        this.name = name;
    }

    /**
     * Returns the name of the table
     *
     * @return The name of the table
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the name of the table
     *
     * @param name The name of the table
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Get the number of columns
     *
     * @return The number of columns
     */
    public int getColumnCount() {
        return columnCount;
    }

    /**
     * Sets the number of columns
     *
     * @param columnCount The number of columns
     */
    public void setColumnCount(int columnCount) {
        this.columnCount = columnCount;
    }

    /**
     * Get the number of rows
     *
     * @return The number of rows
     */
    public int getRowCount() {
        return rowCount;
    }

    /**
     * Sets the number of rows
     *
     * @param rowCount The number of rows
     */
    public void setRowCount(int rowCount) {
        this.rowCount = rowCount;
    }

    /**
     * Get the columns
     *
     * @return The columns
     */
    public Column[] getColumns() {
        return columns;
    }

    /**
     * Sets the columns of the table
     *
     * @param columns The columns of the table
     */
    public void setColumns(Column[] columns) {
        this.columns = columns;
    }

    /**
     * Get the rows of the table
     *
     * @return The rows of the table
     */
    public Row[] getRows() {
        return rows;
    }

    /**
     * Sets the rows of the table
     *
     * @param rows The rows of the table
     */
    public void setRows(Row[] rows) {
        this.rows = rows;
    }
}
